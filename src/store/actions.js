export default  {

  // context = store对象 上下文对象
  aupdataeInfo(context) {
      // 这样就是一个异步的操作了
      setTimeout(() => {
          context.commit('uplateInfo', payload)
          console.log(payload); //这就是你丢过来的参数
      }, 1000)

  }

}