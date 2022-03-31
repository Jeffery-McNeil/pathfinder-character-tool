class Job < ApplicationRecord
    has_many :general_feats
    has_many :skill_feats
    has_many :skill_feats
    has_many :skills
    has_many :spell_slots
    has_many :spells
    has_many :proficiencies

    validates :name, inclusion: { in: %w( Alchemist Barbarian Bard Champion Cleric Druid Fighter 
                                        Investigator Magus Monk Oracle Ranger Rogue Sorcerer Summoner 
                                        Swashbuckler Witch Wizard Gunslinger Inventor ) }
    validates :hit_points, inclusion: { in: 1..12 }
end
