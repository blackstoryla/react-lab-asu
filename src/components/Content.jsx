import './style.css'
export function Content({children}){
    return(
        <div className="primary-holder column is-two-thirds-tablet">
            {children}
        </div>
    )
}