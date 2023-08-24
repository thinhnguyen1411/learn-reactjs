import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Ký ức ùa về cùng những giọng ca rất đỗi mộc mạc',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/f/8/bff88f5ab647e1f2242067b24df02f2a.jpg'
        },
        {
            id: 2,
            name: 'Ở đây có những bản hit cực chill, vừa nghe vừa feel',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg'
        },
        {
            id: 3,
            name: 'Không ồn ã, không vội vàng, cùng thư giãn với âm nhạc Acoustic ngay tại đây',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;