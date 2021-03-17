import React from 'react'
import {BeatLoader, SquareLoader, RingLoader, BarLoader, ClockLoader, CircleLoader, HashLoader} from 'react-spinners'
import { PRIMARY_COLOR } from '../styles'
import LoaderContainer from './LoaderContainer'

const Loader = ({text, type, color}) => {


  const getLoaderType = (type) => {
    if (type == 'beat') {
      return <BeatLoader loading color={color ? color : PRIMARY_COLOR} size={10} />
    } else if (type == 'square') {
      return <SquareLoader loading color={color ? color : PRIMARY_COLOR} size={20}/>
    } else if (type == 'ring'){
      return <RingLoader loading color={color ? color : PRIMARY_COLOR} size={30} />
    } else if (type == 'clock'){
      return <ClockLoader loading color={color ? color : PRIMARY_COLOR} size={30} />
    } else if (type == 'circle'){
      return <CircleLoader loading color={color ? color : PRIMARY_COLOR} size={30} />
    } else if (type == 'hash'){
      return <HashLoader loading color={color ? color : PRIMARY_COLOR} size={30} />
    } else {
      return <BarLoader loading color={color ? color : PRIMARY_COLOR}/>
    }
  }

  let test = <HashLoader loading color={PRIMARY_COLOR} size={30}/>
    return (
      <LoaderContainer style={color ? {color: color} : {color: PRIMARY_COLOR}}>
        {getLoaderType(type)}
        {/* {test} */}
        <h4 style={{marginTop: '1em'}}>{text ? text : null}</h4>
      </LoaderContainer>
    )
}

export default Loader;