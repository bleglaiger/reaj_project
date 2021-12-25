import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Titulo Featured
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">-$10.21</span>
                    <span className="featuredMoneyRate">
                        -$12.21 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to las month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Titulo Featured
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$10.21</span>
                    <span className="featuredMoneyRate">
                        -$12.21 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to las month
                </span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">
                    Titulo Featured
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">-$10.21</span>
                    <span className="featuredMoneyRate">
                        -$12.21 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to las month
                </span>
            </div>
            
        </div>
    )
}


