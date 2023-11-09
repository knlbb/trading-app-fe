import { Typography } from "@mui/material";

interface StockCardProps {
	companyLogo?: string;
	companyTickerName: string;
	stockPrice: number;
	postiveStockChange: boolean;
}

export function StockCard({companyLogo, companyTickerName, stockPrice, postiveStockChange} : StockCardProps) {
	return (
		<div style={{width: '500px', height: '75px', borderRadius: '25px'}}>
			<img src={companyLogo} alt="png_image"/>
			<Typography>
				<span>{companyTickerName}</span>
				<span>{stockPrice}</span>
			</Typography>
			{ postiveStockChange ? 
				<>up</> // show stock price UP image 
				
				:
				<>down</> // show stock price DOWN image
			}
		</div>
	);
}
