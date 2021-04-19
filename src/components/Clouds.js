import LargeCloudImg from './images/cloud_big.png'
import SmallCloudImg from './images/cloud_small.png'

const Clouds = () => {
    return (
        <div className='clouds'>
            <div className='cloud_sm'><img src={SmallCloudImg} alt='Small cloud'/></div>
            <div className='cloud_lg'><img src={LargeCloudImg} alt='Large cloud'/></div>
        </div>
    )
}

export default Clouds
