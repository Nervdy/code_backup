"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const vscode = require('vscode');
const http = require('http');
let items;
function activate(context) {
    items = new Map();
    refresh();
    setInterval(refresh, 60 * 1e3);
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(refresh));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
function refresh() {
    const config = vscode.workspace.getConfiguration();
    const configuredSymbols = config.get('vscode-stocks.stockSymbols', [])
        .map(symbol => symbol);
    if (!arrayEq(configuredSymbols, Array.from(items.keys()))) {
        cleanup();
        fillEmpty(configuredSymbols);
    }
    refreshSymbols(configuredSymbols);
}
function fillEmpty(symbols) {
    symbols
        .forEach((symbol, i) => {
        // Enforce ordering with priority
        const priority = symbols.length - i;
        const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, priority);
        item.text = `${symbol}: $…`;
        item.show();
        items.set(symbol, item);
    });
}
function cleanup() {
    items.forEach(item => {
        item.hide();
        item.dispose();
    });
    items = new Map();
}
function refreshSymbols(symbols) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!symbols.length) {
            return;
        }
        const url = `http://hq.sinajs.cn/list=${symbols.map(i => 's_' + i).join(',')}`;
        try {
            const response = yield httpGet(url);
            let matched = response.match(/".*"/g);
            symbols.map((item, index) => {
              updateItemWithSymbolQuote(item, matched[index].replace('"', '').split(','));
            })
        }
        catch (e) {
            throw new Error(`Invalid response: ${e.message}`);
        }
    });
}
function updateItemWithSymbolQuote(symbol, symbolQuote) {
    const item = items.get(symbol);
    const price = Number(symbolQuote[1]).toFixed(2);
    const changevalue = Number(symbolQuote[2]).toFixed(2);
    const changerate = symbolQuote[3];
    item.text = `${symbol.slice(-3)} ${price} ${changevalue} ${changerate}`;
    const config = vscode.workspace.getConfiguration();
    const useColors = config.get('vscode-stocks.useColors', false);
    if (useColors) {
        const color = changevalue > 0 ? 'lightgreen' :
            changevalue < 0 ? 'pink' :
                'white';
        item.color = color;
    }
    else {
        item.color = undefined;
    }
}
function httpGet(url) {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let responseData = '';
            response.on('data', chunk => responseData += chunk);
            response.on('end', () => {
                // Sometimes the 'error' event is not fired. Double check here.
                if (response.statusCode === 200) {
                    resolve(responseData);
                }
                else {
                    reject('fail: ' + response.statusCode);
                }
            });
        });
    });
}
function arrayEq(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    return arr1.every((item, i) => item === arr2[i]);
}
//# sourceMappingURL=extension.js.map