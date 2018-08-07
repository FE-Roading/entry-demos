// easy-mock api的地址现已放置到本地
// const BASEURL = 'https://www.easy-mock.com/mock/5b5ddb639b54da5dcc7d1881/'
const LOCALURL = 'http://shopping.onlyoup.top/api/'

const URL = {
    url: LOCALURL,
    index: LOCALURL + 'home/init',
    getGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',
    login: LOCALURL + 'user/login',
    loginStatus: LOCALURL + 'user/status',
    address: LOCALURL + "user/address",
    addressAdd: LOCALURL + "user/address/add",
    addressEdit: LOCALURL + "user/address/edit",
    addressDel: LOCALURL + "user/address/del",
    addressAll: LOCALURL + "user/address/all",
    regiter: LOCALURL + 'user/register',
    getCategory: LOCALURL + 'goods/getCategoryList',
    getSubCategory: LOCALURL + 'goods/getSubCategoryList',
    getGoodsList: LOCALURL + 'goods/getGoodsListByCategorySubID',
    orderPay: LOCALURL +'user/pay',
    order: LOCALURL + 'user/order',
    orderDel: LOCALURL +'user/order/del',
    infoEdit: LOCALURL +'user/info/edit',
    info: LOCALURL +'user/info',
    comments: LOCALURL +'user/comments',
    comAdd: LOCALURL + 'user/comments/add',
    comDel: LOCALURL + 'user/comments/del',
}

module.exports = URL
