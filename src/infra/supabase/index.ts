// import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
// import { Request } from 'express';
// import { REQUEST } from '@nestjs/core';
// import { ConfigService } from '@nestjs/config';

import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export default createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// // import { ExtractJwt } from 'passport-jwt';

// @Injectable({ scope: Scope.REQUEST })
// export class Supabase {
//   //   private readonly logger = new Logger(Supabase.name);
//   private clientInstance: SupabaseClient;

//   constructor(
//     // @Inject(REQUEST) private readonly request: Request,
//     private readonly configService: ConfigService,
//   ) {}

//   getClient() {
//     if (this.clientInstance) {
//       return this.clientInstance;
//     }

//     this.clientInstance = createClient(
//       this.configService.get('SUPABASE_URL'),
//       this.configService.get('SUPABASE_KEY'),
//       //   {
//       //     autoRefreshToken: true,
//       //     detectSessionInUrl: false,
//       //   },
//     );

//     // this.clientInstance.auth.setAuth(
//     //   ExtractJwt.fromAuthHeaderAsBearerToken()(this.request),
//     // );
//     // this.logger.log('auth has been set!');

//     return this.clientInstance;
//   }
// }
