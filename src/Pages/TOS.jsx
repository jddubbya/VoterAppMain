import TOSDoc from '../../Content/VoCheckTOS.pdf'

const TOS = () => {
    return(
      <>
      <h2>
        Terms of Service
      </h2>
        <body>
            <object class="pdf" 
                data={TOSDoc}
                width="800"
                height="800">
            </object>
        </body>
      </>
    )
}
    
export default TOS
