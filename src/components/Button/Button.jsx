function Button(props)
{
    function buttonDisable(index, btn)
    {
        var btnClass= document.getElementsByClassName("btn-"+index)
        for (var i = 0; i < btnClass.length; i++) {
            btnClass[i].disabled=true
            btnClass[i].style.cursor="not-allowed"
         }
        if(props.questions[props.index].correctAnswer === btn)
        {
            props.setScore(props.score+1)
        }
       
    }

    return(
        <div>
             {
                props.element.answers.map(btn=>{
                return(
                    <button className={"btn-"+props.index.toString()} onClick={(e)=>{buttonDisable(props.index, btn)}}>{btn}</button>
                )
            })
        }
        </div>
       
    )
}
export default Button