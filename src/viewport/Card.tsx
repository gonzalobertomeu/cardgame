import { Card as CardEntity } from "../engine/domain/Card"
import { GameEngine } from "../engine/GameEngine"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { CardContent } from "./CardTypes/CardContent"
type CardProps = {
    card: CardEntity
    player?: 'player' | 'opponent'
    hidden?: boolean
    flip?: boolean
    disableHover?: boolean
}

export const Card = ({card, player, hidden = false, flip = false, disableHover = false}: CardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isFlipped, setIsFlipped] = useState<boolean>(hidden || flip)

    useEffect(() => {
        if (flip) {
            setTimeout(() => {
                setIsFlipped(false)
            }, 5)
        }
    }, [])

    const handleClick = () => {
        if (card && player) {
            GameEngine.getInstance().playCard(card, player)
        }
    }
    return (
        <motion.div
            className={`w-30 h-50 rounded-md shadow-${!disableHover && isHovered ? 'lg' : 'sm'}`} 
            style={{transition: 'box-shadow .3s'}}
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTapStart={() => setIsHovered(false)}
            transition={{type: 'spring', stiffness: 700, damping: 80 }}
            layout="position"
            layoutId={card.getId()}
        >
            <motion.div className="w-full h-full relative"
                animate={{
                    y: !disableHover && isHovered ? (isFlipped ? 10 : -20) : 0,
                    scale: !disableHover && isHovered ? 1.2 : 1,
                }}
            >
                <div 
                    className={`w-full h-full p-2 absolute bg-white rounded-md border-2 border-slate-600 backface-hidden shadow-md bg-slate-200 ${!isFlipped ? '' : 'rotate-y-180'}`} 
                    style={{
                        transition: 'transform 1s',
                    }}
                >
                    <CardContent card={card}/>
                </div>
                <div className={`w-full h-full absolute bg-slate-500 rounded-md p-2 border-2 border-slate-600 backface-hidden ${!isFlipped ? 'rotate-y-180' : ''}`} 
                    style={{
                        transition: 'transform 1s',
                    }}
                >
                    <div className="w-full h-full rounded-sm bg-slate-600">
                    </div>
                </div>
            </motion.div>
            
        </motion.div>
    )
}