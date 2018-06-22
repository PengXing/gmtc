# 获得当前所处地址和天气信息

## 描述

获得用户当前所处地址和天气信息，地址通过 IP 来识别，天气通过 IP 识别的地址来获取

## HTTP Request

`GET http://localhost:8079/api/weather`

## 请求参数

无

## 返回内容

```json
{
  "status": 0,
  "message": "",
  "data": {
    "province": "北京",
    "weather": "多云转晴",
    "date": "2018-06-23",
    "time": "16:00"
  }
}
```
