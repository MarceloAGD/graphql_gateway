import { IntrospectAndCompose } from '@apollo/gateway';
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
            {name: 'users', url: 'http://host.docker.internal:4001/graphql'},
            {name: 'playlists', url: 'http://host.docker.internal:4002/graphql'},
            {name: 'movies', url: 'http://host.docker.internal:4003/graphql'},
          ]
        })
      }
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
