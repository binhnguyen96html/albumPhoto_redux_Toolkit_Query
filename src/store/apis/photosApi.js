import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker'

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder){
        return {
            fetchPhotos: builder.query({
                providesTags: (results, error, album) => {
                    const tags = results.map(photo => {
                        return {type: 'Photo', id: photo.id}
                    });

                    tags.push({type: 'AlbumPhoto', id: album.id});

                    return tags;
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'GET',
                        params: {
                            albumId: album.id,
                        }
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (results, error, album) => {
                    return [{type: 'AlbumPhoto', id: album.id}]
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method:'POST',
                        body: {
                            url: faker.image.abstract(150, 150, true),
                            albumId: album.id
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{type: 'Photo', id: photo.id}]
                },
                query: (photo) => {
                    return {
                        url:   `photos/${photo.id}`,
                        method: 'DELETE',
                    }
                }
            })
        }
    }
});


export const {useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation} = photosApi;
export {photosApi};