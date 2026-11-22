import footerGif from "./../../assets/footer-gif.gif"
import "./Footer.css"

export default function Footer(){
    return (
        <footer>
            <div className="footer-content">
                    <img src={footerGif} alt="" />
                    <p>&#169; Create by Alexandre Chaves Martins TFA - 2026.2</p>
           </div>
        </footer>
    )
}