import React from "react";
import ZegoUIKitPrebuiltLiveStreaming, { HOST_DEFAULT_CONFIG } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

const LiveStriming = (props) => {
  const { liveID, onLeaveLiveStreaming, userName, userID, appSign, appID } = props;

  return (
    <>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={appID}
        appSign={appSign}
        userID={userID}
        userName={userName}
        liveID={liveID}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => { onLeaveLiveStreaming() }
        }}
      />
    </>
  )
}
export default LiveStriming;