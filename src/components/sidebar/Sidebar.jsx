import { LineStyle, Timeline, TrendingDown } from "@mui/icons-material"
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <LineStyle className="sidebarIcon" /> Inicio
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon"/> Gráficas
                        </li>
                        <li className="sidebarListItems">
                            <TrendingDown className="sidebarIcon"/> Estadísticas
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}
