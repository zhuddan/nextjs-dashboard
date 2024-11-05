"use client";
import { Button } from "@/app/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  function onAuth() {
    const appid = 'wx43c8a71978cb199c'
    const redirect_uri = encodeURIComponent('http://jj.server.com')
    const scope = 'snsapi_userinfo' // snsapi_base snsapi_userinfo
    const href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`
    window.location.href = href
  }
  const [nickname, setNickname] = useState('');
  const [headimgurl, setHeadimgurl] = useState('');
  async function getCode() {
    const code = new URLSearchParams(window.location.search)?.get('code')
    const { headimgurl, nickname } = await (await fetch('/api?code=' + code)).json() as {
      headimgurl: string
      nickname: string
    }
    setNickname(nickname)
    setHeadimgurl(headimgurl)
  }
  return <div>
    <Button onClick={onAuth}>auth</Button>
    <Button onClick={getCode}>getCode</Button>

    <div className="flex items-center flex-col">
      {
        headimgurl &&
        <Image
          src={headimgurl}
          className="rounded-full"
          alt={`headimgurl's profile picture`}
          width={128}
          height={128}
        />
      }
      {
        nickname &&
        <span>{nickname}</span>
      }
    </div>
  </div>
}
