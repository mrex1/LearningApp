export function stackNavigator(){
    this.ScreenStack=[]
    this.back=()=>{
        this.ScreenStack.pop()
        let ScreenStack=this.ScreenStack
        return ScreenStack[ScreenStack.length-1]
    }
    this.go=(screenName)=>{
        this.ScreenStack.push(screenName)
        let ScreenStack=this.ScreenStack
        return ScreenStack[ScreenStack.length-1]
    }
    this.backhome=()=>{
        this.ScreenStack=[]
        return null
    }
}