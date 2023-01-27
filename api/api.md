1x ceUSDC

0.05485146x APT

список валют: 
```
https://tokens.pancakeswap.finance/pancakeswap-aptos.json
```

ceUSDC: 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin
APT: 0x1::aptos_coin::AptosCoin

получить курс:
```
https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<A, B>

A - адрес первой валюты
B - адрес второй валюты
```

пример: для APT - ceUSDC
```
https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<0x1::aptos_coin::AptosCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>
```

ответ сервера:
```json
{"type":"0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<0x1::aptos_coin::AptosCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>","data":{
"block_timestamp_last":"1674847897",
"reserve_x":"2525325211431",
"reserve_y":"459241396818"
}}
// x - APT
// y - ceUSDC
```
APT - csUSDC

`new Date(block_timestamp_last * 1000)` - отметка времени курса (~20 минут назад)
`y / x * 100 = 18.185` - ceUSDC за APT
`1 / (y / x * 100) = 0.0549` - APT за ceUSDC


























-------------
-------------
-------------
-------------

ceUSDC - lzUSDC

https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>

reserve_x: "553741"
reserve_y: "559032"

---

APT - lzUSDC

https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<0x1::aptos_coin::AptosCoin, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>

reserve_x: "5486716762100"
reserve_y: "999268365958"

---

APT - whUSDC

https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<0x1::aptos_coin::AptosCoin, 0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T>

reserve_x: "6608129744647"
reserve_y: "1202091627064"

---

whUSDC - lzUSDC

https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>

reserve_x: "9610036"
reserve_y: "9630000"