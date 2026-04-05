
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl border border-gray-100">
      <div className="text-teal-500 mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard;
