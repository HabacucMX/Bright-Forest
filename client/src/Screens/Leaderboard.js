function Leaderboard() {
    return (
        <div className="screenMargin grid gap-3">
            <div className="leaderTitle">Leaderboard</div>
            <div className="rivalCard">
                <div className="rivalAddress"><span className="text-3xl">#1🚲</span> 0x04cc6b487566B1C821bEa04d7ac0d23CEDe05cC9</div>
                <div className="rivalStats">
                    <div>3 rides</div>
                    <div>+24500⚡</div>
                    <div>24.5Km</div>
                    <div>2 🏅</div>
                </div>
            </div>
            <div className="rivalCard">
                <div className="rivalAddress"><span className="text-3xl">#2🚲</span> 0x04cc6b487566B1C821bEa04d7ac0d23CEDe05cC9</div>
                <div className="rivalStats">
                    <div>2 rides</div>
                    <div>+15800⚡</div>
                    <div>15.8Km</div>
                    <div>1 🏅</div>
                </div>
            </div>

        </div>
        )
    }
    export default Leaderboard;