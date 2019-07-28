import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Stock } from '../entities/stock.entity';
import { StockService } from '../services/stock.service';

@Crud({
    model: {
        type: Stock,
    }
})
@Controller('stock')
export class StockController {
    constructor(public stockService: StockService) { }
}
