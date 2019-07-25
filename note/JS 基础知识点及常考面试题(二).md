# == VS ===

对于 `==`，如果对比双方类型不一样，则会进行 **类型转换**。

假如我们需要对比 `x` 和 `y` 是否相同，就会进行如下判断流程：

1. 首先会判断两者类型是否相同，相同则比大小

2. 类型不相同的话，就会进行类型转换

3. 会先判断是否在对比 `null` 和 `undefined`，是的话就会返回 `true`  

4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换为 `number`

5. 判断其中一方是否为 `boolean`，是的话就会把 `boolean` 转为 `number` 再进行判断

6. 判断其中一方是否为 `object` 且另一方为 `string`、`number` 或者 `symbol`，是的话就会把 `object` 转为原始类型再进行判断

    ```js
    '[object Object]' == {}
    // true
    ```

    ![](https://user-gold-cdn.xitu.io/2018/12/19/167c4a2627fe55f1?imageslim)

