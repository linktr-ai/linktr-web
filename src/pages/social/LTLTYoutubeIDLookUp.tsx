import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  MDBContainer, MDBInput, MDBRow
} from "mdbreact";

import LTAnimationLogo from './../../components/LTAnimationLogo'

const LTYoutubeIDLookUp = () => {
  const [url, setUrl] = useState('');

  function lookingForID(e: any) {
    const url = e.target.value;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);

    const youtubeUrl = (match && match[7].length === 11) ? match[7] : false;
    if (youtubeUrl === false) {
      setUrl(url);
    } else {
      setUrl(youtubeUrl);
    }
  }

  return (
    <MDBContainer fluid>
      <LTAnimationLogo />

      <MDBRow lg="24">
        <MDBInput
          className='active'
          lg="24"
          label="Run function on click icon"
          icon="search"
          value={url}
          onChange={lookingForID}
        />
        <br />
      </MDBRow>
    </MDBContainer>
  );
}

export default withRouter(LTYoutubeIDLookUp);
