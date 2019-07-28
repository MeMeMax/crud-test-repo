import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StockService } from './services/stock.service';
import { StockController } from './controllers/stock.controller';
import { Stock } from './entities/stock.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Stock])
    ],
    providers: [
        StockService
    ],
    controllers: [StockController]
})
export class StockModule { }
