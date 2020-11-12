import React from 'react'
import '../../styles/index.css'
import { FcComboChart } from 'react-icons/fc'
import { BsStarFill } from 'react-icons/bs'
import { FaMapMarkedAlt, FaTags, FaChartBar } from 'react-icons/fa'
import { AiOutlinePercentage } from 'react-icons/ai'

const FiturContent = () => {
	return(
		<div className="fitur">
			<div className="fitur-title">
				<h1>OUR SERVICES</h1>
			</div>
			<div className="grid-container">
				<div className="grid-item1">
					<div className="input-icon">
						<div className="circle1"></div>
	                	<span className = "icon"><FaMapMarkedAlt /></span>
	                </div>     
	                <div className="text-item1">
	                	<h2>Nearby</h2>
	                	<p>Memudahkan pelanggan untuk menemukan lokasi outlet anda</p>
	                </div>
				</div>
				<div className="grid-item2">
					<div className="input-icon">
						<div className="circle2"></div>
	                	<span className = "icon"><FaChartBar /></span>
	                </div>
	                <div className="text-item2">
	                	<h2>Income</h2>
	                	<p>Laporan pemasukan untuk mempermudah anda mengelola keuangan outlet</p>
	                </div>
				</div>
				<div className="grid-item1">
					<div className="input-icon">
						<div className="circle1"></div>
	                	<span className = "icon"><AiOutlinePercentage/></span>
	                </div>
	                <div className="text-item1">
	                	<h2>Atur Promo</h2>
	                	<p>Atur berbagai macam promo untuk menarik lebih banyak pelanggan</p>
	                </div>
				</div>
				<div className="grid-item2">
					<div className="input-icon">
						<div className="circle2"></div>
	                	<span className = "icon"><BsStarFill /></span>
	                </div>
	                <div className="text-item2">
	                	<h2>User Review</h2>
	                	<p>Review oleh user untuk menampilkan kualitas outlet anda</p>
	                </div>
				</div>
			</div>
		</div>

	)
}

export default FiturContent