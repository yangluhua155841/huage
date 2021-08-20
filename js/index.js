new Vue({
	el: "#vue",
	data: {
		inputName: "输入商品名... ",
		num: "",
		items: [
			{
				name: "首页",
				href: "index.html"
			},
			{
				name: "我的订单",
				href: "订单.html"
			},
			{
				name: "我的商品",
				href: ""
			},
			{
				name: "客户服务",
				href: ""
			}
		],
		shoplist: [
		{
			url: "img/2.jpg",
			name: "电压力锅",
			price: "199.99"
		},
		{
			url: "img/3.jpg",
			name: "电饭煲",
			price: "259.99"
		},
		{
			url: "img/5.jpg",
			name: "微波炉",
			price: "519"
		},
		{
			url: "img/6.jpg",
			name: "电饼铛",
			price: "89.99"
		},
		{
			url: "img/7.jpg",
			name: "豆浆机",
			price: "219"
		},
		{
			url: "img/8.jpg",
			name: "多用途锅",
			price: "279.99"
		},
		{
			url: "img/9.jpg",
			name: "vivo手机",
			price: "1599"
		},
		{
			url: "img/10.jpg",
			name: "电动牙刷",
			price: "85"
		},
		{
			url: "img/11.jpg",
			name: "天地一号苹果醋",
			price: "50"
		},
		{
			url: "img/12.jpg",
			name: "zero",
			price: "1999"
		},
		{
			url: "img/13.jpg",
			name: "双肩包",
			price: "186"
		},
		{
			url: "img/14.jpg",
			name: "榴莲",
			price: "6/个"
		},
		{
			url: "img/15.jpg",
			name: "面筋",
			price: "2.5/包"
		},
		{
			url: "img/16.jpg",
			name: "笔记本电脑",
			price: "4399"
		},
		{
			url: "img/17.jpg",
			name: "个性头绳",
			price: "9.9"
		},
		{
			url: "img/18.jpg",
			name: "麻辣条",
			price: "3.8"
		},
		{
			url: "img/19.jpg",
			name: "口罩",
			price: "9/包"
		},
		{
			url: "img/20.jpg",
			name: "SONY手机",
			price: "8999"
		},
		{
			url: "img/21.jpg",
			name: "PHILIPS支架",
			price: "1299"
		},
		{
			url: "img/22.jpg",
			name: "SONY相机",
			price: "12000"
		},


		]
	},
	created: function () {
	},
	mounted: function () {
		var list = this.shoplist;
		this.num = list.length;
	},
	methods: {
		tip:function(e){
			console.log(e)
			if(confirm("您确定购买吗？")==true){
				alert("已售完")
			}
		}


	}

})
