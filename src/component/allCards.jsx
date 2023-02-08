import TopCard from './TopCard';

function Cards() {
    return (
        <div>
            <TopCard
                backgroundColor="#64b5f6"
                backgroundImage="linear-gradient(to right,#FF6F91, #FF9671)"
                avatarSrc="src/assets/profile.png"
                name="Mr.Demo Name 2"
                subName="Rs 20,231,65"
                imageSrc="src/assets/card2.png"
            />
            <TopCard
                backgroundColor="#9575cd"
                backgroundImage="linear-gradient(to right,#B83FAE, #845EC2)"
                avatarSrc="src/assets/profile.png"
                name="Mr.Demo Name 1"
                subName="Rs 19,231,65"
                imageSrc="src/assets/card.png"
            />
            <TopCard
                backgroundColor="#64b5f6"
                backgroundImage="linear-gradient(to right,#FF6F91, #FF9671)"
                avatarSrc="src/assets/profile.png"
                name="Mr.Demo Name 3"
                subName="Rs 20,231,65"
                imageSrc="src/assets/card3.png"
            />
        </div>
    )
}
export default Cards;