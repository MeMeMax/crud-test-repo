import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Stock } from '../entities/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StockService extends TypeOrmCrudService<Stock> {
    constructor(@InjectRepository(Stock) repo) {
        super(repo);
    }
}
