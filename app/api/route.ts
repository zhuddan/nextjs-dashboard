export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = Object.fromEntries(url.searchParams)?.code;
  const appId = 'wx43c8a71978cb199c'
  const appsecret = 'd529646c701043473791046be9914b3a';
  const { openid, access_token } = await (await fetch(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appsecret}&code=${code}&grant_type=authorization_code`)).json()
  const userinfo = await (await fetch(`https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`)).json()
  return Response.json({ ...userinfo })
}
