from rest_framework import serializers
from form.models import SbQuote, SbQuoteLoccvg

#SbQuoteLoccvg Serializer 
class SbQuoteLoccvgSerializer(serializers.ModelSerializer):
    class Meta:
        model = SbQuoteLoccvg
        fields = '__all__'

#SbQuote Serializer 
class SbQuoteSerializer(serializers.ModelSerializer):
    pods = SbQuoteLoccvgSerializer(many=True)

    class Meta:
        model = SbQuote
        fields = [
            'quote_id', 
            'quote_name', 
            'quote_datetime',
            'quote_optype',
            'quote_flowtype',
            'quote_totsowhead',
            'quote_totmarkethead',
            'pods'
        ]

    def create(self, validated_data):
        pods = validated_data.pop('pods')
        quote = SbQuote.objects.create(**validated_data)
        for pod in pods:
            SbQuoteLoccvg.objects.create(**pod, quote = quote)
        return quote 

        
