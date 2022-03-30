function AncestryFeature ({ item }) {
    let description

    switch (item.name) {
        case "Change Shape (Anadi)" :  description = "1 Action: You change into your human or spider shape. Each shape has a specific, persistent appearance. In your human shape, you can't use unarmed attacks granted by your ancestry. In your spider shape, you aren’t flat-footed when climbing, but you can’t use weapons, shields, or other held items of any sort nor can you take any action that has the manipulate trait."
            break;
        case "Fangs" : description = "You were born with a natural means for hunting and self-defense. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the finesse and unarmed traits."
            break;
        case "Emotionally Unaware" : description = "You find it difficult to understand and express complex emotions. You take a –1 circumstance penalty to Diplomacy and Performance checks, and on Perception checks to Sense Motive."
            break;
        case "Constructed" : description = "Your synthetic body resists ailments better than those of purely biological organisms. You gain a +1 circumstance bonus to saving throws against diseases, poisons, and radiation."
            break;
        case "Automaton Core" : description = "Your body contains an automaton core infused with planar quintessence that grants you power to perform various tasks and houses your soul and life energy. This life energy flows through you much like the blood of humanoids. As a result, you are a living creature. You don’t have the typical construct immunities, can be affected by effects that target a living creature, and can recover Hit Points normally via positive energy. Additionally, you are not destroyed when reduced to 0 Hit Points. Instead, your life energy attempts to keep you active even in dire straits; you are knocked out and begin dying when reduced to 0 Hit Points (Core Rulebook 459)."
            break;
        case "Constructed Body" : description = "Your physiological needs are different than those of living creatures. You don’t need to eat or drink. You don’t need to sleep, but you still need a daily period of rest. During this period of rest, you must enter a recuperating standby state for 2 hours, which is similar to sleeping except you are aware of your surroundings and don’t take penalties for being unconscious. Much like with sleeping, if you go too long without entering your standby state, you become fatigued and can’t recover until you enter standby for 2 hours."
            break;
        case "Hydration" : description = "While you are an amphibious being equally as capable on land as in the water, your body requires you to return to aquatic environments at least once in a 24-hour period. You must submerge in water in order to rehydrate your water-acclimated skin. If you fail to do this, your skin begins to crack and your gills become painful. After the first 24 hours outside of water, you take a –1 status penalty to Fortitude saves. After 48 hours, you struggle to breathe air and begin to suffocate until returned to water."
            break;
        case "Land on Your Feet" : description = "When you fall, you take only half the normal damage and don't land prone."
            break;
        case "Sunlight Healing" : description = "A conrasu can enter a meditative, healing state as a 10-minute activity when exposed to direct sunlight, in which case they recover 1d8 Hit Points. At 3rd level, and every 2 levels thereafter, this healing increases by 1d8. Once a conrasu has recovered Hit Points in this way, they are temporarily immune to further uses of Sunlight Healing for 1 day."
            break;
        case "Unusual Anatomy" : description = "Your unorthodox body resists physical afflictions meant for other creatures. You gain a +1 circumstance bonus to saves against diseases and poisons."
            break;
        case "Bite" : description = "Your sharp teeth and powerful jaws are fearsome weapons. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group."
            break;
        case "Eyes in Back" : description = "You have eyes that point in several different directions and instinctively notice movement in the peripheries of your vision. When you use the Seek basic action, you can look for creatures in two areas instead of one. If precision is necessary, you can select two 30- foot cones or 15-foot bursts within line of sight instead of one."
            break;
        case "Keen Eyes" : description = "Your eyes are sharp, allowing you to make out small details about concealed or even invisible creatures that others might miss. You gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within 30 feet of you. When you target an opponent that is concealed from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one."
            break;
        case "Change Shape (Kitsune)" : description = "1 Action: You transform into a specific alternate form determined by your heritage. If your heritage doesn't list a form, your alternate form is a tailless form, which is a common Medium humanoid ancestry prevalent where you grew up (typically human). This form is the same age and body type as your true form and has roughly analogous physical traits, such as hair color. Using Change Shape counts as creating a disguise for the Impersonate use of Deception. You lose any unarmed Strikes you gained from a kitsune heritage or ancestry feat in this form. You can remain in your alternate form indefinitely, and you can shift back to your true kitsune form by using this action again."
            break;
        case "Draconic Exemplar" : description = "You draw minor powers from your draconic exemplar. Choose a type of chromatic or metallic dragon to be your exemplar. This determines your scale color and appearance, and dragons sometimes look more favorably upon those kobolds who resemble them, at the GM’s discretion. Your exemplar may also determine details of other abilities you have, using the Draconic Exemplars table. \n\n Black - Line - Acid - Reflex \n Blue - Line - Electricity - Reflex \n Green - Cone - Poison -Fortitude \n Red - Cone - Fire -Reflex \n White - Cone - Cold -Reflex \n Brass -Line - Fire - Reflex \n Bronze - Line - Electricity - Reflex \n Copper - Line - Acid - Reflex \n Gold - Cone - Fire - Reflex \n Silver - Cone - Cold - Reflex"
            break;
        case "Plant Nourishment" : description = "You gain nourishment in the same way that the plants or fungi that match your body type normally do, through some combination of photosynthesis, absorbing minerals with your roots, or scavenging decaying matter. You typically do not need to pay for food. If you normally rely on photosynthesis and go without sunlight for 1 week, you begin to starve. You can derive nourishment from specially formulated bottles of sunlight instead of natural sunlight, but these bottles cost 10 times as much as standard rations (or 40 sp)."
            break;
        case "Aquatic Adaptation" : description = "Your reptilian biology allows you to hold your breath for a long time. You gain the Breath Control general feat as a bonus feat."
            break;
        case "Magical Strikes" : description = "Your inherent magic pervades your entire being. All your Strikes are magical, whether with unarmed attacks or weapons."
            break;
        case "Wings" : description = "All strix possess powerful wings. While not all strix focus on honing their flying skills, a strong flap of their wings allows strix to travel longer distances when jumping. When Leaping horizontally, you move an additional 5 feet. You don’t automatically fail your checks to High Jump or Long Jump if you don’t Stride at least 10 feet first. In addition, when you make a Long Jump, you can jump a distance up to 10 feet further than your Athletics check result, though still with the normal maximum of your Speed."
            break;
        case "Sharp Beak" : description = "With your sharp beak, you are never without a weapon. You have a beak unarmed attack that deals 1d6 piercing damage. Your beak is in the brawling weapon group and has the finesse and unarmed traits."
            break;
    }



    return (
        <p>{item.name}: {description}</p>
    )
}

export default AncestryFeature;