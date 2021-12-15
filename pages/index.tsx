import Head from 'next/head'
import {Background} from "../components/Background/Background";
import {Nav} from "../components/Nav/Nav";
import {Main} from "../components/Main/Main";
import {Brands} from "../components/Brands/Brands";
import {Selector} from "../components/Selector/Selector";
import React from "react"
import { AppWrapper } from '../Index.style';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta/>
      </Head>
        <AppWrapper>
            <Background/>
            <Nav/>
            <Main/>
            <Selector/>
            <Brands/>
        </AppWrapper>
    </div>
  )
}
