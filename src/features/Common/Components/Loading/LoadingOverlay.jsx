const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-spin border-t-transparent" />
        </div>
    );
};

export default LoadingOverlay;
