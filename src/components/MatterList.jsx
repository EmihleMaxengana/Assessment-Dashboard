import MatterCard from './MatterCard'

const MatterList = ({ matters }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {matters.map((matter) => (
                <MatterCard key={matter.id}matter= {matter}/>
            )
            )}
        </div>
    )
}

export default MatterList