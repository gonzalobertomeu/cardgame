import { Card as CardEntity, WarriorCard } from "../engine/domain/Card"
import { GameEngine } from "../engine/GameEngine"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
type CardProps = {
    card?: CardEntity
    player?: 'player' | 'opponent'
    hidden?: boolean
    flip?: boolean
}

export const Card = ({card, player, hidden = false, flip = false}: CardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isFlipped, setIsFlipped] = useState<boolean>(hidden || flip)

    useEffect(() => {
        if (flip) {
            setTimeout(() => {
                console.log('flipping')
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
        <motion.div className={`w-30 h-50 rounded-md ${isHovered ? 'shadow-lg' : ''}`} onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTapStart={() => setIsHovered(false)}
            animate={{
                y: isHovered ? (isFlipped ? 10 : -20) : 0,
                scale: isHovered ? 1.2 : 1,
            }}
            transition={{type: 'spring', stiffness: 700, damping: 80, duration: 3 }}
            layout
            layoutId={card?.getId()}
        >
            <motion.div className="w-full h-full relative">
                <div 
                    className={`w-full h-full absolute bg-white rounded-md backface-hidden shadow-md ${!isFlipped ? '' : 'rotate-y-180'}`} 
                    style={{
                        transition: 'transform 1s',
                    }}
                >
                    <p>{card?.getType()}</p>
                    {
                        card instanceof WarriorCard && (
                            <>
                                <p>{card.getHealth()}</p>
                                <p>{card.getWarriorType()}</p>
                            </>
        
                        )
                    }
                </div>
                <div className={`w-full h-full absolute bg-slate-700 rounded-md backface-hidden ${!isFlipped ? 'rotate-y-180' : ''}`} 
                    style={{
                        transition: 'transform 1s',
                    }}
                />
            </motion.div>
            
        </motion.div>
    )
}