import { LineStyle, Timeline, TrendingDown } from "@mui/icons-material"
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="title">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <LineStyle /> Inicio
                        </li>
                        <li className="sidebarListItems">
                            <Timeline /> Graficas
                        </li>
                        <li className="sidebarListItems">
                            <TrendingDown /> Estadisticas
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}
