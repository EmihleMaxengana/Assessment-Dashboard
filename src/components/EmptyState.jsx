const EmptyState = () => {
    return (
        <div className="text-center py-12">
            {  }
            <svg className="w-20 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
            <h3 className="text-lg font-semibold text-slate-700 mb-2"> No matters found</h3>
            <p className="text-slate-500">
                Try adjusting your search to see more results
            </p>
        </div>
    )
}

export default EmptyState