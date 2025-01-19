import "./cssFile/footer.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


export default function Footer() {
    return (
        <div className="footer mt-5 ">
            <div className="bg-warning data">
                <p>اشترك الان واحصل علي <span>خسم 40%</span> علي جميع الباقات</p>
                <button>اشترك الان </button>
            </div>
            <div className="chatIcon">
                <ChatBubbleIcon />
            </div>
        </div>
    )

}