const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')
const express = require('express')
const app = jsonServer.create()
const router = jsonServer.router('db.json')

let corsOptions = {
  origin: '*', // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
}

app.db = router.db
const rules = auth.rewriter({
  users: 660,
  userSetting: 660,
  accounts: 660,
})

app.use(cors(corsOptions))
app.use(rules)
app.use(auth)
app.use(router)

app.listen(4000, () => {
  console.log('JSON Server is running on port 4000...')
})
