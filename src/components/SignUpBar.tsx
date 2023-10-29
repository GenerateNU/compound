import React from "react"
import { Button, Divider, Grid, GridItem } from '@chakra-ui/react'

function redirectToPage(index: number) {
  
}

function makeDivider(last: boolean): JSX.Element {
  if (last) {
    return <></>
  } else {
    return <Divider borderWidth='2px' width="220px" orientation='horizontal' />
  }
}

function makeSection(index: number, last: boolean, sectionText: string): JSX.Element  {
  return (
    <>
    <GridItem margin={0} padding={0} gap={0}>
      <Button width="220px" padding='40px' className="rounded-lg border-2 border-solid  bg-transparent text-white" 
      onClick={()=> redirectToPage(index)}>{sectionText}</Button>
    </GridItem>
    <GridItem  padding={0} margin={0} gap={0}>
      {makeDivider(last)}
    </GridItem>
      </>)
}

function makeBar():JSX.Element[] {
  const sectionNames = [
    "Personalize Your Profile",
    "Customize Your Dashboard",
    "Add Your Financial Info",
    "Earn Your Badge!"
  ]

  const signUpBar: JSX.Element[] = []

  sectionNames.forEach((sectionText, index) => {
    if(index === sectionNames.length - 1) {
      signUpBar.push(makeSection(index+1, true, sectionText))
    } else {
      signUpBar.push(makeSection(index+1, false, sectionText))
    }
  })

  return signUpBar

}


export default function SignUpBar(): JSX.Element {
    return (<Grid margin={0} padding={0} placeItems="center" templateColumns='repeat(7,1fr)' columnGap='0' rowGap={0}>
      {makeBar()}
      </Grid>)
  }
  