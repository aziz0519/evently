import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'


type ColletionProps = {
    data: IEvent[],
    emptyTitle: string,
    empytyStateSubtext: string,
    collectionType: 'Events_Organized' | 'My_Tickets' | 'All_Events' ,
    limit: number,
    page: number | string,
    totalPages?: number
}

const Collection = ({
    data,
    emptyTitle,
    empytyStateSubtext,
    collectionType,
    page,
    totalPages = 0,
}: ColletionProps) => {
  return (
    <>
        
        
    </>
  )
}

export default Collection;