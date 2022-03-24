class Job < ApplicationRecord
    has_many :general_feats
    has_many :skill_feats
    has_many :skill_feats
    has_many :skills
    has_many :spell_slots
    has_many :spells
    has_many :proficiencies

    validates :name, inclusion: { in: %w( alchemist, barbarian, bard, champion, cleric, druid, fighter, 
                                        investigator, magus, monk, oracle, ranger, rogue, sorcerer, summoner, 
                                        swashbuckler, witch, wizard, gunslinger, inventor ) }
    validates :key_ability, inclusion { in: %w( strength, dexterity, constitution, intelligence, wisdom, charisma )}
    validates :hit_points, inclusion { in: 1..12 }
end
