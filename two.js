downWord(){
    const {dispatch} = this.props
    new Promise(resolve => {
        dispatch({
            type:'book/downBook',
            payload:{
                resolve,
                "bookId":this.state.id,
                "bussinesType":this.state.type,
            }
        })
    }).then((res)=>{
        const link = document.createElement('a');
        res.blob.then((myblob) => {
            link.href = window.URL.createObjectURL(myblob);
            link.download = decodeURI(res.fileName);
            document.body.appendChild(link);
            const evt = document.createEvent("MouseEvents");
            evt.initEvent("click", false, false);
            link.dispatchEvent(evt);
            document.body.removeChild(link);
        })
    })
}