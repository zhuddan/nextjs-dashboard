"use client";
import { Button } from "@/app/ui/button";

export default function Page() {
  function onAuth() {
    const appid = 'wx43c8a71978cb199c'
    const redirect_uri = encodeURIComponent('http://jj.server.com')
    const href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
    window.location.href = href
  }
  async function getCode() {
    const t = (await fetch('/dashboard/wx/api')).text()
    console.log(t)
  }
  return <div>
    <Button onClick={onAuth}>auth</Button>
    <Button onClick={getCode}>getCode</Button>
  </div>
}


