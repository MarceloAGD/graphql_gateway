import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway:{
        supergraphSdl: new IntrospectAndCompose ({
          subgraphs:[
            {name: 'users', url: 'http://localhost:4001/graphql'},
            {name: 'playlists', url: 'http://localhost:4002/graphql'}
          ]
        })
      }
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
