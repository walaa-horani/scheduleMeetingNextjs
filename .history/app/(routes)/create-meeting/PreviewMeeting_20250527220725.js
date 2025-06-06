import React from 'react'

function PreviewMeeting({formValue}) {
  return (
    <div>
        {formValue?.meetingName}
    </div>
  )
}

export default PreviewMeeting