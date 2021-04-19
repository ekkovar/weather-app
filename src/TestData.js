export const TEST_WEATHER_DATA =
{
    "data": {
        "coord": {
            "lon": -96.7969,
            "lat": 32.7763
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 67.78,
            "feels_like": 65.68,
            "temp_min": 66.2,
            "temp_max": 69.01,
            "pressure": 1018,
            "humidity": 30
        },
        "visibility": 10000,
        "wind": {
            "speed": 6.91,
            "deg": 330,
            "gust": 21.85
        },
        "clouds": {
            "all": 20
        },
        "dt": 1618781603,
        "sys": {
            "type": 1,
            "id": 3783,
            "country": "US",
            "sunrise": 1618746806,
            "sunset": 1618793942
        },
        "timezone": -18000,
        "id": 4684888,
        "name": "Dallas",
        "cod": 200
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "481",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "url": "http://api.openweathermap.org/data/2.5/weather?q=Dallas,TX,USA&zip=75001&appid=e646dda1e4dd26c9ba07acc84bb8c9a5&units=imperial",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "method": "get"
    },
    "request": {}
}





// ----------------------------------------------------------------------------
export const TEST_FORECAST_DATA =
{
    "data": {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1618790400,
                "main": {
                    "temp": 66.63,
                    "feels_like": 64.51,
                    "temp_min": 64.49,
                    "temp_max": 66.63,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1001,
                    "humidity": 32,
                    "temp_kf": 1.19
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 8.21,
                    "deg": 350,
                    "gust": 11.95
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-19 00:00:00"
            },
            {
                "dt": 1618801200,
                "main": {
                    "temp": 61.81,
                    "feels_like": 59.47,
                    "temp_min": 58.87,
                    "temp_max": 61.81,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 38,
                    "temp_kf": 1.63
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 2.06,
                    "deg": 31,
                    "gust": 2.39
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-19 03:00:00"
            },
            {
                "dt": 1618812000,
                "main": {
                    "temp": 55.76,
                    "feels_like": 53.2,
                    "temp_min": 55.76,
                    "temp_max": 55.76,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 2.8,
                    "deg": 102,
                    "gust": 2.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-19 06:00:00"
            },
            {
                "dt": 1618822800,
                "main": {
                    "temp": 53.04,
                    "feels_like": 50.45,
                    "temp_min": 53.04,
                    "temp_max": 53.04,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1002,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.29,
                    "deg": 193,
                    "gust": 3.47
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-19 09:00:00"
            },
            {
                "dt": 1618833600,
                "main": {
                    "temp": 51.55,
                    "feels_like": 48.9,
                    "temp_min": 51.55,
                    "temp_max": 51.55,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 3.85,
                    "deg": 230,
                    "gust": 4.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-19 12:00:00"
            },
            {
                "dt": 1618844400,
                "main": {
                    "temp": 61.32,
                    "feels_like": 58.98,
                    "temp_min": 61.32,
                    "temp_max": 61.32,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 5.91,
                    "deg": 211,
                    "gust": 7.92
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-19 15:00:00"
            },
            {
                "dt": 1618855200,
                "main": {
                    "temp": 70.3,
                    "feels_like": 68.34,
                    "temp_min": 70.3,
                    "temp_max": 70.3,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1001,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 5.59,
                    "deg": 221,
                    "gust": 5.95
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-19 18:00:00"
            },
            {
                "dt": 1618866000,
                "main": {
                    "temp": 73.87,
                    "feels_like": 72.09,
                    "temp_min": 73.87,
                    "temp_max": 73.87,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 998,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 4.9,
                    "deg": 187,
                    "gust": 5.77
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-19 21:00:00"
            },
            {
                "dt": 1618876800,
                "main": {
                    "temp": 70.29,
                    "feels_like": 68.56,
                    "temp_min": 70.29,
                    "temp_max": 70.29,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 998,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 42
                },
                "wind": {
                    "speed": 8.37,
                    "deg": 184,
                    "gust": 9.15
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-20 00:00:00"
            },
            {
                "dt": 1618887600,
                "main": {
                    "temp": 62.38,
                    "feels_like": 60.76,
                    "temp_min": 62.38,
                    "temp_max": 62.38,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 999,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 9.66,
                    "deg": 173,
                    "gust": 21.79
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-20 03:00:00"
            },
            {
                "dt": 1618898400,
                "main": {
                    "temp": 58.73,
                    "feels_like": 56.89,
                    "temp_min": 58.73,
                    "temp_max": 58.73,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 999,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 8.75,
                    "deg": 173,
                    "gust": 22.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-20 06:00:00"
            },
            {
                "dt": 1618909200,
                "main": {
                    "temp": 56.28,
                    "feels_like": 54.43,
                    "temp_min": 56.28,
                    "temp_max": 56.28,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 998,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.34,
                    "deg": 187,
                    "gust": 21.54
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-20 09:00:00"
            },
            {
                "dt": 1618920000,
                "main": {
                    "temp": 54.7,
                    "feels_like": 52.97,
                    "temp_min": 54.7,
                    "temp_max": 54.7,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 999,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.7,
                    "deg": 196,
                    "gust": 20.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-20 12:00:00"
            },
            {
                "dt": 1618930800,
                "main": {
                    "temp": 64.24,
                    "feels_like": 62.56,
                    "temp_min": 64.24,
                    "temp_max": 64.24,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1001,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 8.97,
                    "deg": 263,
                    "gust": 16.42
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-20 15:00:00"
            },
            {
                "dt": 1618941600,
                "main": {
                    "temp": 63.01,
                    "feels_like": 61.18,
                    "temp_min": 63.01,
                    "temp_max": 63.01,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 11
                },
                "wind": {
                    "speed": 15.08,
                    "deg": 343,
                    "gust": 15.73
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-20 18:00:00"
            },
            {
                "dt": 1618952400,
                "main": {
                    "temp": 55.96,
                    "feels_like": 53.56,
                    "temp_min": 55.96,
                    "temp_max": 55.96,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1005,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 18.34,
                    "deg": 357,
                    "gust": 20.69
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-20 21:00:00"
            },
            {
                "dt": 1618963200,
                "main": {
                    "temp": 53.17,
                    "feels_like": 50.54,
                    "temp_min": 53.17,
                    "temp_max": 53.17,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1006,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 52
                },
                "wind": {
                    "speed": 16.55,
                    "deg": 10,
                    "gust": 21.21
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-21 00:00:00"
            },
            {
                "dt": 1618974000,
                "main": {
                    "temp": 46.8,
                    "feels_like": 41,
                    "temp_min": 46.8,
                    "temp_max": 46.8,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1009,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 7
                },
                "wind": {
                    "speed": 13.33,
                    "deg": 15,
                    "gust": 24.85
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-21 03:00:00"
            },
            {
                "dt": 1618984800,
                "main": {
                    "temp": 44.47,
                    "feels_like": 39,
                    "temp_min": 44.47,
                    "temp_max": 44.47,
                    "pressure": 1027,
                    "sea_level": 1027,
                    "grnd_level": 1010,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 10.51,
                    "deg": 32,
                    "gust": 27.09
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-21 06:00:00"
            },
            {
                "dt": 1618995600,
                "main": {
                    "temp": 42.35,
                    "feels_like": 37.17,
                    "temp_min": 42.35,
                    "temp_max": 42.35,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1009,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 8.59,
                    "deg": 44,
                    "gust": 24.54
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-21 09:00:00"
            },
            {
                "dt": 1619006400,
                "main": {
                    "temp": 41.05,
                    "feels_like": 36.61,
                    "temp_min": 41.05,
                    "temp_max": 41.05,
                    "pressure": 1027,
                    "sea_level": 1027,
                    "grnd_level": 1010,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 6.67,
                    "deg": 58,
                    "gust": 17.65
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-21 12:00:00"
            },
            {
                "dt": 1619017200,
                "main": {
                    "temp": 49.64,
                    "feels_like": 46.36,
                    "temp_min": 49.64,
                    "temp_max": 49.64,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1012,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 7.9,
                    "deg": 64,
                    "gust": 12.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-21 15:00:00"
            },
            {
                "dt": 1619028000,
                "main": {
                    "temp": 59.36,
                    "feels_like": 56.21,
                    "temp_min": 59.36,
                    "temp_max": 59.36,
                    "pressure": 1027,
                    "sea_level": 1027,
                    "grnd_level": 1010,
                    "humidity": 26,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 8.43,
                    "deg": 68,
                    "gust": 10.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-21 18:00:00"
            },
            {
                "dt": 1619038800,
                "main": {
                    "temp": 62.67,
                    "feels_like": 59.95,
                    "temp_min": 62.67,
                    "temp_max": 62.67,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1007,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 9.69,
                    "deg": 70,
                    "gust": 9.84
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-21 21:00:00"
            },
            {
                "dt": 1619049600,
                "main": {
                    "temp": 59.05,
                    "feels_like": 56.44,
                    "temp_min": 59.05,
                    "temp_max": 59.05,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1007,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 8.88,
                    "deg": 80,
                    "gust": 11.56
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-22 00:00:00"
            },
            {
                "dt": 1619060400,
                "main": {
                    "temp": 56.89,
                    "feels_like": 54.39,
                    "temp_min": 56.89,
                    "temp_max": 56.89,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1008,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.4,
                    "deg": 81,
                    "gust": 14.12
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-22 03:00:00"
            },
            {
                "dt": 1619071200,
                "main": {
                    "temp": 54.18,
                    "feels_like": 51.78,
                    "temp_min": 54.18,
                    "temp_max": 54.18,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1008,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 4.94,
                    "deg": 48,
                    "gust": 11.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-22 06:00:00"
            },
            {
                "dt": 1619082000,
                "main": {
                    "temp": 52.36,
                    "feels_like": 50.16,
                    "temp_min": 52.36,
                    "temp_max": 52.36,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1007,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 6.67,
                    "deg": 78,
                    "gust": 16.46
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-22 09:00:00"
            },
            {
                "dt": 1619092800,
                "main": {
                    "temp": 49.46,
                    "feels_like": 46.69,
                    "temp_min": 49.46,
                    "temp_max": 49.46,
                    "pressure": 1025,
                    "sea_level": 1025,
                    "grnd_level": 1009,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 6.69,
                    "deg": 88,
                    "gust": 18.48
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-22 12:00:00"
            },
            {
                "dt": 1619103600,
                "main": {
                    "temp": 52.92,
                    "feels_like": 50.45,
                    "temp_min": 52.92,
                    "temp_max": 52.92,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1009,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 10.36,
                    "deg": 109,
                    "gust": 17.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-22 15:00:00"
            },
            {
                "dt": 1619114400,
                "main": {
                    "temp": 58.3,
                    "feels_like": 56.03,
                    "temp_min": 58.3,
                    "temp_max": 58.3,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1008,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 10.02,
                    "deg": 103,
                    "gust": 13.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-22 18:00:00"
            },
            {
                "dt": 1619125200,
                "main": {
                    "temp": 64.89,
                    "feels_like": 63,
                    "temp_min": 64.89,
                    "temp_max": 64.89,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1004,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 11.25,
                    "deg": 124,
                    "gust": 13.8
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-22 21:00:00"
            },
            {
                "dt": 1619136000,
                "main": {
                    "temp": 62.13,
                    "feels_like": 60.49,
                    "temp_min": 62.13,
                    "temp_max": 62.13,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.21,
                    "deg": 119,
                    "gust": 14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-23 00:00:00"
            },
            {
                "dt": 1619146800,
                "main": {
                    "temp": 59.83,
                    "feels_like": 58.37,
                    "temp_min": 59.83,
                    "temp_max": 59.83,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1004,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.12,
                    "deg": 105,
                    "gust": 19.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-23 03:00:00"
            },
            {
                "dt": 1619157600,
                "main": {
                    "temp": 57.36,
                    "feels_like": 55.85,
                    "temp_min": 57.36,
                    "temp_max": 57.36,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1003,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.25,
                    "deg": 95,
                    "gust": 23.96
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-23 06:00:00"
            },
            {
                "dt": 1619168400,
                "main": {
                    "temp": 57.78,
                    "feels_like": 56.21,
                    "temp_min": 57.78,
                    "temp_max": 57.78,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1001,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.58,
                    "deg": 141,
                    "gust": 22.93
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2021-04-23 09:00:00"
            },
            {
                "dt": 1619179200,
                "main": {
                    "temp": 57.45,
                    "feels_like": 56.14,
                    "temp_min": 57.45,
                    "temp_max": 57.45,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1001,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.67,
                    "deg": 147,
                    "gust": 23.31
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                    "3h": 0.11
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-23 12:00:00"
            },
            {
                "dt": 1619190000,
                "main": {
                    "temp": 57.54,
                    "feels_like": 56.62,
                    "temp_min": 57.54,
                    "temp_max": 57.54,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1001,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.66,
                    "deg": 135,
                    "gust": 22.03
                },
                "visibility": 10000,
                "pop": 0.53,
                "rain": {
                    "3h": 0.35
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-23 15:00:00"
            },
            {
                "dt": 1619200800,
                "main": {
                    "temp": 59.09,
                    "feels_like": 59.02,
                    "temp_min": 59.09,
                    "temp_max": 59.09,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1000,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.25,
                    "deg": 134,
                    "gust": 17.94
                },
                "visibility": 8890,
                "pop": 1,
                "rain": {
                    "3h": 4.07
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-23 18:00:00"
            },
            {
                "dt": 1619211600,
                "main": {
                    "temp": 60.98,
                    "feels_like": 61.38,
                    "temp_min": 60.98,
                    "temp_max": 60.98,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 997,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.16,
                    "deg": 129,
                    "gust": 18.34
                },
                "visibility": 4991,
                "pop": 1,
                "rain": {
                    "3h": 6.45
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2021-04-23 21:00:00"
            }
        ],
        "city": {
            "id": 4684888,
            "name": "Dallas",
            "coord": {
                "lat": 32.7763,
                "lon": -96.7969
            },
            "country": "US",
            "population": 1197816,
            "timezone": -18000,
            "sunrise": 1618746806,
            "sunset": 1618793942
        }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "15904",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "url": "http://api.openweathermap.org/data/2.5/forecast?q=Dallas,TX,USA&zip=75001&appid=e646dda1e4dd26c9ba07acc84bb8c9a5&units=imperial",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "method": "get"
    },
    "request": {}
}