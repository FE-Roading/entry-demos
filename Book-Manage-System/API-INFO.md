{
	"variables": [],
	"info": {
		"name": "Node-Book-Management",
		"_postman_id": "8572e09e-9531-5c3d-1215-b9786a0c320c",
		"description": "",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
	},
	"item": [
		{
			"name": "获取所有图书信息",
			"request": {
				"url": "http://localhost:3000/api/books",
				"method": "GET",
				"header": [],
				"body": {},
				"description": "获取所有的图书信息"
			},
			"response": []
		},
		{
			"name": "根据图书ID获取信息",
			"request": {
				"url": "http://localhost:3000/api/books/1",
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"description": ""
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "id",
							"value": "2",
							"description": ""
						},
						{
							"key": "name",
							"value": "三国演义修改标题",
							"description": ""
						},
						{
							"key": "category",
							"value": "文学"
						},
						{
							"key": "description",
							"value": "三国延时的内容被"
						},
						{
							"key": "author",
							"value": "罗贯中",
							"description": ""
						}
					]
				},
				"description": "根据图书ID获取信息"
			},
			"response": []
		},
		{
			"name": "修改图书信息",
			"request": {
				"url": "http://localhost:3000/api/books/1",
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"description": ""
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "id",
							"value": "2",
							"description": ""
						},
						{
							"key": "name",
							"value": "三国演义修改标题",
							"description": ""
						},
						{
							"key": "category",
							"value": "文学"
						},
						{
							"key": "description",
							"value": "三国延时的内容被"
						},
						{
							"key": "author",
							"value": "罗贯中",
							"description": ""
						}
					]
				},
				"description": "根据图书ID获取信息"
			},
			"response": []
		},
		{
			"name": "删除图书",
			"request": {
				"url": "http://localhost:3000/api/books/2",
				"method": "DELETE",
				"header": [],
				"body": {},
				"description": ""
			},
			"response": []
		},
		{
			"name": "增加图书信息",
			"request": {
				"url": "http://localhost:3000/api/books/",
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"description": ""
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "name",
							"value": "三国演义修改标题",
							"description": ""
						},
						{
							"key": "category",
							"value": "文学"
						},
						{
							"key": "description",
							"value": "三国延时的内容被"
						},
						{
							"key": "author",
							"value": "罗贯中",
							"description": ""
						}
					]
				},
				"description": ""
			},
			"response": []
		}
	]
}