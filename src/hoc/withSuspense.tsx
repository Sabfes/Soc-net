import React from 'react'

export function withSuspense<WCP>(WraperConponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<div>loading...</div>}>
                <WraperConponent {...props}/>
            </React.Suspense>
    }
}
